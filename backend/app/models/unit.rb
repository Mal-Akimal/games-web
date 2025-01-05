class Unit < ApplicationRecord
  has_many :lessons
  belongs_to :path
end
