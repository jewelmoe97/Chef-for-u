class Recipe < ApplicationRecord
    has_many :comments
    has_many :users, through: :comments
    validates :title, presence: true
    validates :instructions, length: { minimum: 50 }
    validates :category, presence: true

   

end
