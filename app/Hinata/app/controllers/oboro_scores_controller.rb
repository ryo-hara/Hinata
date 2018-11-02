class OboroScoresController < ApplicationController

    def clear_index
    end

    def ajax_clear_scores
        @sike_clear_scores = Score.where(score_id: 130).order("value DESC")
        render json: @sike_clear_scores
    end

    def ajax_gameover_scores
        @sike_gameover_scores = Score.where(score_id: 140).order("value DESC")
        render json: @sike_gameover_scores
    end


end
