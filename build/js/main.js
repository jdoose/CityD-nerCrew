function login(){var a=$("#LoginInputUser").val(),b=$("#LoginInputPassword").val();restClient.update("/api/V1/login",{username:a,password:b}).done(function(a){console.log("REST call succeeded",a),token=a.token,localStorage.setItem("token",token),window.location="index.html"}).fail(function(){console.log("fail")})}function toggleChapters(){$("#chapters-all").hasClass("chaptersVisible")?hideChapters():(hideChapters(),$("#chapters-all").addClass("chaptersVisible"),$(".chapterIcon").addClass("chapterIconActive"))}function toggleCompetences(){$("#competences").hasClass("chaptersVisible")?hideChapters():(hideChapters(),$("#competences").addClass("chaptersVisible"),$(".competenceIcon").addClass("competenceIconActive"))}function toggleEduplan(){$("#eduplan").hasClass("chaptersVisible")?hideChapters():(hideChapters(),$("#eduplan").addClass("chaptersVisible"),$(".eduIcon").addClass("eduIconActive"))}function toggleStudent(){$("#student").hasClass("chaptersVisible")?hideChapters():(hideChapters(),$("#student").addClass("chaptersVisible"))}function toggleSchool(){$("#school").hasClass("chaptersVisible")?hideChapters():(hideChapters(),$("#school").addClass("chaptersVisible"))}function toggleKlasse(){$("#klasse").hasClass("chaptersVisible")?hideChapters():(hideChapters(),$("#klasse").addClass("chaptersVisible"))}function toggleHelp(){$("#help").hasClass("chaptersVisible")?hideChapters():(hideChapters(),$("#help").addClass("chaptersVisible"),$(".helpIcon").addClass("helpIconActive"))}function toggleLogout(){$("#logout").hasClass("chaptersVisible")?hideChapters():(hideChapters(),$("#logout").addClass("chaptersVisible"),$(".logoutIcon").addClass("logoutIconActive"))}function hideChapters(){$(".chapters").removeClass("chaptersVisible"),$(".chapterIcon").removeClass("chapterIconActive"),$(".eduIcon").removeClass("eduIconActive"),$(".competenceIcon").removeClass("competenceIconActive"),$(".logoutIcon").removeClass("logoutIconActive"),$(".helpIcon").removeClass("helpIconActive")}function getAvatars(a){console.log(a),restClient.withHeader("Authorization",a).read("/api/V1/avatar").then(function(a){console.log(a);for(i in a)console.log(a[i].avatarBigUrl)}).fail(function(){console.log("Failed")})}function getChapters(a){console.log(a),restClient.withHeader("Authorization",a).read("/api/V1/chapter").then(function(a){console.log(a);for(i in a)console.log(a[i].name+a[i].strongcolor+a[i].weakcolor),$("#chapterTable").append('<tr style="background-color: '+a[i].strongcolor+'; cursor:pointer;"><td><p>'+a[i].name+"</p></td></tr>")}).fail(function(){console.log("Failed")})}function getEduplan(a){console.log(a),restClient.withHeader("Authorization",a).read("/api/V1/educationalPlan").then(function(a){console.log(a);for(i in a)console.log(a[i].name),$("#eduTable").append('<tr style="cursor:pointer;"><td><p>'+a[i].name+"</p></td></tr>")}).fail(function(){console.log("Failed")})}$("#btn").on("click",function(){login()});var restClient=ê.createRestClient({host:"46.101.204.215:1337",useSSL:!1}),token,restClient=ê.createRestClient({host:"46.101.204.215:1337",useSSL:!1}),token=localStorage.getItem("token");