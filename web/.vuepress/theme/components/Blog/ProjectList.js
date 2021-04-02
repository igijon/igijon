import Vue from "vue";
import ArticleIcon from "@theme/icons/ArticleIcon.vue";
import BookIcon from "@theme/icons/BookIcon.vue";
import LinkIcon from "@theme/icons/LinkIcon.vue";
import ProjectIcon from "@theme/icons/ProjectIcon.vue";
import { navigate } from "@theme/util/navigate";
import Animation from "@theme/components/Blog/Animation.vue";
export default Vue.extend({
    name: "ProjectList",
    components: { ArticleIcon, BookIcon, LinkIcon, ProjectIcon, Animation },
    methods: {
        navigate(link) {
            navigate(link, this.$router, this.$route);
        },
    },
});
//# sourceMappingURL=ProjectList.js.map