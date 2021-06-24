class CommentsController < ApplicationController
    def index
        comments = Comment.all 
        render json: CommentSerializer.new(comments).to_serialized_json
    end

    def show
        comment = Comment.find_by(id: params[:id])
        render json: CommentSerializer.new(comment).to_serialized_json
    end



end
