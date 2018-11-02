Rails.application.routes.draw do
  resources :scores
  resources :test_ranks

  get   '/test_ranks',    to:'test_ranks#index'
  post   '/test_ranks',    to:'test_ranks#create'
  
  get   '/magic_wars_clear_score_pages',    to:'magic_wars_scores#clear_index'
  get   '/nastassja_clear_score_pages',    to:'nastassja_scores#clear_index'
  get   '/oboro_clear_score_pages',    to:'oboro_scores#clear_index'
  get   '/reieiya_clear_score_pages',    to:'reieiya_scores#clear_index'
  get   '/sike_test_rank_pages',    to:'sike_test_rank_pages#index'



  get   'sike_ajax_clear_scores',   to:'sike_test_rank_pages#ajax_clear_scores'
  get   'sike_ajax_gameover_scores',   to:'sike_test_rank_pages#ajax_gameover_scores'

  get   'magic_wars_ajax_clear_scores',   to:'magic_wars_scores#ajax_clear_scores'
  get   'nastassja_ajax_clear_scores',   to:'nastassja_scores#ajax_clear_scores'
  get   'oboro_ajax_clear_scores',   to:'oboro_scores#ajax_clear_scores'
  get   'reieiya_ajax_clear_scores',   to:'reieiya_scores#ajax_clear_scores'

  #get   'oboro_ajax_gameover_scores',   to:'sike_test_rank_pages#ajax_gameover_scores'


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
