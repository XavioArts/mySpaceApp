Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    resources :users
    get "my_friends", to: "users#my_friends"
    put "add_friend", to: "users#add_friend"
    resources :posts
    get "all_posts", to: "posts#all_posts"
  end

  get '*other', to: 'static#index'
end
