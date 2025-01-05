class CreatePaths < ActiveRecord::Migration[7.1]
  def change
    create_table :paths do |t|
      t.string :name
      t.text :description
      t.boolean :completed

      t.timestamps
    end
  end
end
