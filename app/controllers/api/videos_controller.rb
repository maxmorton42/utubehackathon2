class Api::VideosController < ApplicationController
	before_action :set_video, only: [:update]

	def index
		render json: Video.all
  end

	def show
		render json: Video.find(params[:id])
  end

	def create
		video = Video.new(video_params)
		if video.save
			render json: video
		else
			render json: video.errors, status: 422
		end
  end

	def update
		if @video.update(video_params)
			render json: @video
		else
			render json: @video.errors, status: 422
		end
  end

	def destroy
		@video.destroy
	end
	
	private
		def video_params
			params.require(:video).permit(:user_id, :title, :duration, :genre, :description, :trailer)
		end

		def set_video
			@video = Video.find(params[:id])
		end

end
