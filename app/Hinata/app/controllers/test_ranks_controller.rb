class TestRanksController < ApplicationController

    skip_before_action :verify_authenticity_token

    def index
        @scores = Score.all
    end
    def create
        json_request = JSON.parse(request.body.read)
        @get_value = json_request["Data"]["value"]
        @get_score_id = json_request["Data"]["score_id"]

        #get_value = params.require(:Data).(:value)
        id = get_scores_last_id + 1

        @user = Score.new(id: id,score_id: @get_score_id , value: @get_value,created_at: Time.now,updated_at: Time.now)
        @user.save

    end

    private
        def get_scores_last_id
            id = Score.order(:id).last.id
        end

end
