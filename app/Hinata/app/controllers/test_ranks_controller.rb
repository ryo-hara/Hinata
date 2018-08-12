class TestRanksController < ApplicationController

    skip_before_action :verify_authenticity_token

    def index
        @scores = Score.all
    end
    def create
        json_request = JSON.parse(request.body.read)
        @get_value = json_request["Data"]["value"]

        #get_value = params.require(:Data).(:value)

        @user = Score.new(id: 112, value: @get_value,created_at: Time.now,updated_at: Time.now)
        @user.save

    end

end
