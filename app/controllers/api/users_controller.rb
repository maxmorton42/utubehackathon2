class Api::UsersController < ApplicationController

	def show
		render json: User.find(params[:id])
  end

  def update
  end
end
