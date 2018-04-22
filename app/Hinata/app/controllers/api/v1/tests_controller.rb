class Api::V1::TestsController < ApplicationController
    def index
        render json: {
            "comment": "引き返せる内は旅ではない。引き返せなくなった時に、初めてそれは旅になるのだ。"
        }
    end
end