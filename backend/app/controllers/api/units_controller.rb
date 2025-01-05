class Api::UnitsController < ApplicationController
  def index
    @path = Path.find(params[:path_id])
    @units = @path.units
    render json: @units
  end

  def show
    @path = Path.find(params[:path_id])
    @unit = @path.units.find(params[:id])
    render json: @unit
  end

  def create
    @path = Path.find(params[:path_id])
    @unit = @path.units.new(unit_params)
    if @unit.save
      render json: @unit, status: :created
    else
      render json: @unit.errors, status: :unprocessable_entity
    end
  end

  private

  def unit_params
    params.require(:unit).permit(:name, :description, :completed)  # Permit :completed here
  end
end
