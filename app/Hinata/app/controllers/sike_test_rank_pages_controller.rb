class SikeTestRankPagesController < ApplicationController

    def index

        get_score_datas()

        @scores = Score.all
        @sike_clear_scores = Score.where(score_id: 100).order("value DESC")
        @sike_gameover_scores = Score.where(score_id: 101).order("value DESC")
    end

    def get_score_datas
        gon.test_sike_clear_scores = Score.where(score_id: 100).order("value DESC")
        gon.test_sike_gameover_scores = Score.where(score_id: 101).order("value DESC")
    end


    def ajax_clear_scores
        get_score_datas()
        @sike_clear_scores = Score.where(score_id: 100).order("value DESC")
        #@sike_clear_scores = Score.where(score_id: 100).where("created_at between '2018-11-04 01:00:00' and '2018-11-05 23:59:59'").order("value DESC")
        render json: @sike_clear_scores
    end

    def ajax_gameover_scores
        get_score_datas()
        @sike_gameover_scores = Score.where(score_id: 101).order("value DESC")
        render json: @sike_gameover_scores
    end

end
