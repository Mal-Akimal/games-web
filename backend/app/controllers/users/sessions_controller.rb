# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  skip_before_action :verify_signed_out_user, only: :destroy
  def respond_with(resource, _opts = {})
    render json: {
      message: 'Logged in successfully.',
      data: resource
    }, status: :ok
  end

  def respond_to_on_destroy
    authorization_header = request.headers['Authorization']
    token = authorization_header.split(' ').last if authorization_header

    Rails.logger.info "Authorization Header: #{authorization_header}"
    Rails.logger.info "JWT Token: #{token}"

    # Decode the token manually to inspect its jti and user ID
    begin
      secret = Rails.application.credentials.fetch(:secret_key_base)
      decoded_token = JWT.decode(token, secret, true, algorithm: 'HS256')
      payload = decoded_token.first

      Rails.logger.info "Decoded Payload: #{payload}"
      Rails.logger.info "Payload jti: #{payload['jti']}"
      Rails.logger.info "Payload sub: #{payload['sub']}"

      # Find the user and compare the jti
      user = User.find_by(id: payload['sub'])
      if user && user.jti == payload['jti']
        # Revoke the token by updating the jti
        user.update!(jti: SecureRandom.uuid)
        Rails.logger.info "Token revoked. User logged out successfully."
        render json: { message: "Logged out successfully" }, status: :ok
      else
        Rails.logger.error "Token is invalid. jti mismatch or user not found."
        render json: { message: "Couldn't find an active session." }, status: :unauthorized
      end
    rescue JWT::DecodeError => e
      Rails.logger.error "JWT Decode Error: #{e.message}"
      render json: { message: "Invalid token." }, status: :unauthorized
    end
  end
end