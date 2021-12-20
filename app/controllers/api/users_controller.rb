class Api::UsersController < ApplicationController

    before_action :set_user, only: [:show]

    def index
        render json: User.all
    end

    def show
        render json: @user
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
