class CategorySerializer
    include FastJsonapi::ObjectSerializer
    has_many :blogs
    attributes :title 
    def initialize(category_object)
        @category = category_object
    end

    def to_serialized_json
        @category.to_json(except: [:created_at, :updated_at])
    end
end
