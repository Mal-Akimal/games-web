Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
  get "up" => "rails/health#show", as: :rails_health_check

  namespace :api do
    resources :paths, only: [:index, :show], param: :slug do
      resources :units, only: [:index, :show] do
        resources :lessons, only: [:index, :show]
      end
    end
  end
end
