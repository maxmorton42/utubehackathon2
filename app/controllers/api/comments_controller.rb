class Api::CommentsController < ApplicationController

	before_action :set_comment, only: [:update]
	before_action :set_video, only: [:index]

	def index
		render json: @video.comments
  end

	def create
		comment = Comment.new(comment_params)
		if comment.save
			render json: comment
		else
			render json: comment.errors, status: 422
		end
  end

	def update
		if @comment.update(comment_params)
			render json: @comment
		else
			render json: @comment.erros, status: 422
		end
  end

	def destroy
		@comment.destroy
	end
	
	private
		def set_comment
			@comment = Comment.find(params[:id])
		end

		def set_video
			@video = Video.find(params[:video_id])
		end

		def comment_params
			params.require(:comment).permit(:user_id, :video_id, :body)
		end
end
