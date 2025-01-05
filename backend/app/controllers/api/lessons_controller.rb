class Api::LessonsController < ApplicationController
  def index
    @path = Path.find(params[:path_id])
    @unit = @path.units.find(params[:unit_id])
    @lessons = @unit.lessons
    render json: @lessons
  end

  def show
    @path = Path.find(params[:path_id])
    @unit = @path.units.find(params[:unit_id])
    @lesson = @unit.lessons.find(params[:id])
    render json: @lesson.slice(:id, :title, :content, :jsx_component)
  end
  

  def create
    @path = Path.find(params[:path_id])
    @unit = @path.units.find(params[:unit_id])
    @lesson = @unit.lessons.new(lesson_params)
    if @lesson.save
      render json: @lesson, status: :created
    else
      render json: @lesson.errors, status: :unprocessable_entity
    end
  end

  private

  def lesson_params
    params.require(:lesson).permit(:title, :content, :completed)
  end
end
