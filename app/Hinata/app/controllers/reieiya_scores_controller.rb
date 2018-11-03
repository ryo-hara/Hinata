class ReieiyaScoresController < ApplicationController
    def clear_index
    end

    def ajax_clear_scores
        #@sike_clear_scores = Score.where(score_id: 161).order("value DESC")
        @sike_clear_scores = Score.where(score_id: 161).where("created_at between '2018-11-04 01:00:00' and '2018-11-05 23:59:59'").order("value DESC")
        render json: @sike_clear_scores
    end

    def ajax_gameover_scores
        @sike_gameover_scores = Score.where(score_id: 171).order("value DESC")
        render json: @sike_gameover_scores
    end

end
