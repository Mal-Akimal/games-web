class Lesson < ApplicationRecord
  belongs_to :unit

  validates :jsx_component, presence: true
end