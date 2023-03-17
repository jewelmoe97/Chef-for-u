class Recipe < ApplicationRecord
    belongs_to :user
    has_many :comments
    validates :title, presence: true
    validates :instructions, length: { minimum: 50 }
    validates :category, presence: true

   

end
