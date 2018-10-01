Rails.application.routes.draw do
  resources :scores
  resources :test_ranks

  get   '/test_ranks',    to:'test_ranks#index'
  post   '/test_ranks',    to:'test_ranks#create'


  Rails.application.routes.draw do
    namespace :api, {format: 'json'} do
      namespace :v1 do
        namespace :tests do
          get "/" , :action => "index"
        end
      end
    end  
  end
end
