# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
u1 = User.create(username: "alex", password_digest: "1234j", image_url:"https://www.bing.com/images/search?view=detailV2&ccid=aN4KB0wM&id=17D488554291D25E0ACBFA1F204419737F71E150&thid=OIP.aN4KB0wMMyJUGa4G5GXWYwHaD8&mediaurl=https%3a%2f%2f1.bp.blogspot.com%2f-RpAa-HYjtm0%2fV3LGuBdfETI%2fAAAAAAAAMJg%2fmFvCn7rpEY8bgQB_SeL8vt8o3ce_UmzlwCLcB%2fs1600%2ftarzan.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.68de0a074c0c33225419ae06e465d663%3frik%3dUOFxf3MZRCAf%252bg%26pid%3dImgRaw%26r%3d0&exph=667&expw=1250&q=alexander+skarsg%c3%a5rd+tarzan&simid=608041076220066889&FORM=IRPRST&ck=38222F850EBAA06D253FF30196B7D004&selectedIndex=13")

c1=Comment.create(user_id:6, recipe_id:21, review:"very easy recipe 55")