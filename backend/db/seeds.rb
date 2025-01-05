ActiveRecord::Base.connection.execute('PRAGMA foreign_keys = ON')

# Create paths
obby_path = Path.create(
  name: "Coded Obbies",
  description: "Learn how to make awesome obbies",
  completed: false
)

# Create all the units:
intro_unit = obby_path.units.create(
  name: "Introduction",
  description: "How to download studio, etc",
  completed: false
)

unit1 = obby_path.units.create(
  name: "Scripting a Killblock",
  description: "How to download studio, etc",
  completed: false
)
unit2 = obby_path.units.create(
  name: "Moving Blocks",
  description: "How to download studio, etc",
  completed: false
)
unit3 = obby_path.units.create(
  name: "Checkpoints",
  description: "How to download studio, etc",
  completed: false
)

unit4 = obby_path.units.create(
  name: "Falling pillars on step",
  description: "How to download studio, etc",
  completed: false
)

unit5 = obby_path.units.create(
  name: "Closing Gate",
  description: "How to download studio, etc",
  completed: false
)
unit6 = obby_path.units.create(
  name: "Organizing your scripts",
  description: "How to download studio, etc",
  completed: false
)
unit7 = obby_path.units.create(
  name: "Press E to place your path",
  description: "How to download studio, etc",
  completed: false
)
unit8 = obby_path.units.create(
  name: "Collect Coins",
  description: "How to download studio, etc",
  completed: false
)
unit9 = obby_path.units.create(
  name: "GUI & Pets",
  description: "How to download studio, etc",
  completed: false
)


# Intro_unit lessons
intro_unit.lessons.create(
  title: "How to download studio",
  content: "Learn how to get started.",
  completed: false
)
intro_unit.lessons.create(
  title: "How to create a part",
  content: "Learn how to get started.",
  completed: false
)
intro_unit.lessons.create(
  title: "How to add a script",
  content: "Learn how to get started.",
  completed: false
)
intro_unit.lessons.create(
  title: "Parent vs Child",
  content: "Learn how to get started.",
  completed: false
)
# Unit 1 lessons
unit1.lessons.create(title: "Variables", content: "Learn how to define and use variables in scripting.", completed: false, jsx_component: "Lesson1_1")
unit1.lessons.create(title: "Printing", content: "Learn how to print to the console.", completed: false, jsx_component: "Lesson1_2")
unit1.lessons.create(title: "Functions", content: "Learn how to create and use functions.", completed: false, jsx_component: "Lesson1_3")
unit1.lessons.create(title: "Functions with Parameters", content: "Learn how to create functions with parameters.", completed: false, jsx_component: "Lesson1_4")
unit1.lessons.create(title: "If then", content: "Learn how to use conditional statements in scripting.", completed: false, jsx_component: "Lesson1_5")
unit1.lessons.create(title: "Events", content: "Learn how to handle events in Roblox scripting.", completed: false, jsx_component: "Lesson1_6")
unit1.lessons.create(title: "Optional: Instant Respawn", content: "Learn how to create an instant respawn feature.", completed: false, jsx_component: "Lesson1_7")
unit1.lessons.create(title: "Study Guide", content: "Review the material covered in Unit 1.", completed: false, jsx_component: "StudyGuide_1")
unit1.lessons.create(title: "Project: Script a Killblock", content: "Apply what you've learned by scripting a killblock.", completed: false, jsx_component: "Project_1")

# Unit 2 lessons
unit2.lessons.create(title: "Part Properties", content: "Learn how to use and manipulate part properties.", completed: false, jsx_component: "Lesson2_1")
unit2.lessons.create(title: "Changing Property Using Script", content: "Learn how to change part properties with scripts.", completed: false, jsx_component: "Lesson2_2")
unit2.lessons.create(title: "Tween Service", content: "Learn how to use the TweenService to animate parts.", completed: false, jsx_component: "Lesson2_3")
unit2.lessons.create(title: "Client vs Server", content: "Understand the difference between client-side and server-side scripting.", completed: false, jsx_component: "Lesson2_4")
unit2.lessons.create(title: "Optional: Rainbow Tiles", content: "Learn how to create rainbow-colored tiles using scripts.", completed: false, jsx_component: "Lesson2_5")
unit2.lessons.create(title: "Study Guide", content: "Review the material covered in Unit 2.", completed: false, jsx_component: "StudyGuide_2")
unit2.lessons.create(title: "Project: Script Moving Platform", content: "Apply what you've learned by scripting a moving platform.", completed: false, jsx_component: "Project_2")

# Unit 3 lessons
unit3.lessons.create(title: "Making an Obby", content: "Learn how to create an obstacle course in Roblox.", completed: false, jsx_component: "Lesson3_1")
unit3.lessons.create(title: "Setting Level 1 as Default", content: "Learn how to set the first level as the default in your obby.", completed: false, jsx_component: "Lesson3_2")
unit3.lessons.create(title: "Checkpoint Changes", content: "Learn how to implement checkpoint changes in your obby.", completed: false, jsx_component: "Lesson3_3")
unit3.lessons.create(title: "Study Guide", content: "Review the material covered in Unit 3.", completed: false, jsx_component: "StudyGuide_3")
unit3.lessons.create(title: "Project: Implement Leader-stats in Your Obby", content: "Apply what you've learned by adding leader-stats to your obby.", completed: false, jsx_component: "Project_3")
