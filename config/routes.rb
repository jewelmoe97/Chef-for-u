Rails.application.routes.draw do

  # resources :users, only: [:create, :show] do
  #   get 'recipes', on: :member
  # end
  
   resources :recipes  
  # resources :comments, only: [:create, :destroy]
  # end 
resources :comments
#   post "/recipes", to: "recipes#create"
#   get "/recipes", to: "recipes#index"
#   post "/signup", to: "users#create"
#   get "/me", to: "users#show"
#   post "/login", to: "sessions#create"
#   delete "/logout", to: "sessions#destroy"
#   get "/recipes/:id", to: "recipes#show"
#   post "/comments", to: "comments#create"
#   get "/comments" , to: "comments#index"
#  patch "/recipes/:id", to: "recipes#update"

#   delete '/comments/:id', to: 'comments#destroy'
#   delete "/recipes/:id", to: 'recipes#destroy'
  
  get "/recipes", to: "recipes#index"
  get "/recipes/:id", to: "recipes#show"
  post "/recipes", to: "recipes#create"
  patch "/recipes/:id", to: "recipes#update"
  delete '/recipes/:id', to: 'recipes#destroy'
 

  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/comments" , to: "comments#index"
  post "/comments", to: "comments#create"
  delete '/comments/:id', to: 'comments#destroy'
 
 
#  get'/search/:term', to:'recipes#search'

get '/time', to: 'recipes#time'



  

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!


  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
