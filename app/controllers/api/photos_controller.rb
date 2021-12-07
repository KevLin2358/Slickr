class Api::PhotosController < ApplicationController
  skip_before_action :verify_authenticity_token
    
  before_action :ensure_logged_in, only: [:create, :destroy]
  
  def index
    @photos = Photo.all
  end

  def show 
    @photo = Photo.find(params[:id])
    if @photo
      render :show
    else
      render json: @photo.errors.full_messages, status: 404
    end
  end

  def create
    @photo = Photo.new(photo_params)

    if @photo.save
      render :show
    else
      render json: @photo.errors.full_messages, status: 401
    end
  end

  def update
    @photo = Photo.find_by(id: params[:id])
    if @photo && @photo.update(photo_params)
      render :show
    else
      render json: @photo.errors.full_messages, status: 401
    end
  end


  def destroy
    @photo = Photo.find(params[:id])
    if(@photo.uploader_id === current_user.id)
      @photo.destroy
    end
  end

  private
  def photo_params
    params.require(:photo).permit(:title, :file, :description, :uploader_id)
  end
end