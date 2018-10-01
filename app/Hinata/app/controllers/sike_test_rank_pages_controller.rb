class SikeTestRankPagesController < ApplicationController
    def index
        @scores = Score.all
        @sike_clear_scores = Score.where(score_id: 100).order("value DESC")
        @sike_gameover_scores = Score.where(score_id: 101).order("value DESC")

    end
end
