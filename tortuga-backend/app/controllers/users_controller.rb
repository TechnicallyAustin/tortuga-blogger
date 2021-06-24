class UsersController < ApplicationController
    def test
        render json: {test: "success"}
    end

    def index
        user = User.find_by(id: params[:id])
        render :json user

    end


  def new
    user = User.new
  end

  def create 
    user = User.create(user_params)
  end

  private

  def user_params
    params.require(:user).permit(:name)
  end

  


end
