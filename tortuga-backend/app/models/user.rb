class User < ApplicationRecord
    has_many :blogs
    has many :comments, through: :blogs
end


