"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var PostsService = (function () {
    function PostsService() {
        this.data = [
            {
                "id": 1,
                "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
                "category": 0,
                "tags": ["tag_1", "design"],
                "created_at": "2016/11/23",
                "updated_at": "2016/11/23",
                "status": 1
            },
            {
                "id": 2,
                "title": "qui est esse",
                "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
                "category": 1,
                "tags": [""],
                "created_at": "2016/11/23",
                "updated_at": "2016/11/23",
                "status": 0
            },
            {
                "id": 3,
                "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
                "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
                "category": 0,
                "tags": ["test"],
                "created_at": "2016/11/23",
                "updated_at": "2016/11/23",
                "status": 1
            },
            {
                "id": 4,
                "title": "eum et est occaecati",
                "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
                "category": 1,
                "tags": ["ui", "ux"],
                "created_at": "2016/11/23",
                "updated_at": "2016/11/23",
                "status": 1
            },
            {
                "id": 5,
                "title": "nesciunt quas odio",
                "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
                "category": 0,
                "tags": [""],
                "created_at": "2016/11/23",
                "updated_at": "2016/11/23",
                "status": 0
            }
        ];
    }
    PostsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PostsService);
    return PostsService;
}());
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map