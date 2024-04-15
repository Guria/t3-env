import type * as Breadcrumb from "fumadocs-core/breadcrumb";

import type * as Server from "fumadocs-core/server";
import type * as Sidebar from "fumadocs-core/sidebar";
import type * as TOC from "fumadocs-core/toc";
import type { ComponentPropsWithoutRef, ElementType } from "react";

export type BreadcrumbItem = Breadcrumb.BreadcrumbItem;

export type SidebarProviderProps = Sidebar.SidebarProviderProps;
export type SidebarTriggerProps = Sidebar.SidebarTriggerProps<ElementType>;

export type TOCProviderProps = Omit<
  ComponentPropsWithoutRef<typeof TOC.TOCProvider>,
  keyof ComponentPropsWithoutRef<"div">
>;

export type TOCItemType = Server.TOCItemType;

export type PageTreeItem = Server.PageTree.Item;
export type PageTreeFolder = Server.PageTree.Folder;
export type PageTreeRoot = Server.PageTree.Root;
export type PageTreeSeparator = Server.PageTree.Separator;

export type { RemarkDynamicContentOptions } from "fumadocs-core/mdx-plugins";
