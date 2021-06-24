class CommentSerializer
    include FastJsonapi::ObjectSerializer
    attributes :info 
    def initialize(category_object)
        @comment = category_object
    end

    def to_serialized_json
        @comment.to_json
    end
end
