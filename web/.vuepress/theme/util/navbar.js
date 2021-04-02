export const getNavLinkItem = (navbarLink, beforeprefix = "") => {
    const prefix = beforeprefix + (navbarLink.prefix || "");
    const navbarItem = {
        ...navbarLink,
    };
    if (prefix) {
        if (navbarItem.link !== undefined)
            navbarItem.link = prefix + navbarItem.link;
        delete navbarItem.prefix;
    }
    if (navbarItem.items && navbarItem.items.length)
        Object.assign(navbarItem, {
            type: "links",
            items: navbarItem.items.map((item) => getNavLinkItem(item, prefix)),
        });
    else
        navbarItem.type = "link";
    return navbarItem;
};
//# sourceMappingURL=navbar.js.map