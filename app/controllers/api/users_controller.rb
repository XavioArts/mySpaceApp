class Api::UsersController < ApplicationController

    before_action :set_user, only: [:show]
    before_action :authenticate_user!, only: [:my_friends, :add_friend]

    def index
        render json: User.all, include: [:posts]
    end

    def show
        render json: @user, include: [:posts]
    end

    def my_friends
        render json: User.friended_users(current_user.friends)
    end

    def add_friend
        current_user.friends << params[:id].to_i
        current_user.save
    end

    ## Dont need these, user auth handles registration and deletion and edit

    # def create
    # end

    # def update
    # end

    # def destroy
    # end

    private

    def set_user
        @user=User.find(params[:id])
    end

end
