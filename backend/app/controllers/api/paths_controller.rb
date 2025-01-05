class Api::PathsController < ApplicationController
  def index
    paths = Path.includes(units: :lessons) # Eager load units and lessons
    render json: paths.as_json(
      include: {
        units: {
          include: :lessons
        }
      }
    )
  end
  
  def show
    path = Path.includes(units: :lessons).find_by!(slug: params[:slug]) # Find by slug
    render json: path.as_json(
      include: {
        units: {
          include: :lessons
        }
      }
    )
  end
  
  def create
    @path = Path.new(path_params)
    if @path.save
      render json: @path, status: :created
    else
      render json: @path.errors, status: :unprocessable_entity
    end
  end

  private

  def path_params
    params.require(:path).permit(:name, :description, :completed, :slug) # Permit :slug here
  end
end
