class Api::PostsController < ApplicationController

    before_action :authenticate_user!
    before_action :set_post, only: [:destroy, :update]

    def all_posts
        render json: Post.all
    end

    def index
        render json: current_user.posts
    end

    def show
        render json: User.liked(current_user.liked_posts)
    end

    def create 
        @post = current_user.posts.new(post_params)
        if @post.save
            render json: @post
        else
            render json: {errors: @post.errors}, status: 422
        end
    end

    def update 
        if @post.update(post_params)
            render json: @post
        else
            render json: {errors: @post.errors}, status: 422
        end
    end

    def destroy
        render json: @post.destroy
    end

    private

    def post_params
        params.require(:post).permit(:content, :likes)
    end

    def set_post
        @post = current_user.posts.find(params[:id])
    end

end
