class AddJsxComponentToLessons < ActiveRecord::Migration[7.1]
  def change
    add_column :lessons, :jsx_component, :string
  end
end
