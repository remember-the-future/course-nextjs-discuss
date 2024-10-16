"use client";

import { Input } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import * as actions from "@/actions";

export default function SearchInput() {
  const searchParams = useSearchParams();

  // return <Input defaultValue={searchParams.get("term") || ""} />;
  return (
    <form action={actions.search}>
      <Input
        name="term"
        defaultValue={searchParams.get("term") || ""}
        placeholder="Search"
      />
    </form>
  );
}
