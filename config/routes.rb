Rails.application.routes.draw do
  resources :recipes, only: [:index, :create, :shows, :destroy]
  post "/add", to: "recipes#create"
  get "/list", to: "recipes#index"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/show/:id", to: "recipes#shows"
  post "/send", to: "comments#create"
  get "/view" , to: "comments#index"
  delete '/comments/:id', to: 'comments#destroy'
  delete '/recipe/:id', to: 'recipes#destroy'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
