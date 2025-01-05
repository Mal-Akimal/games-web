class AddSlugToPaths < ActiveRecord::Migration[7.1]
  def change
    add_column :paths, :slug, :string
  end
end
