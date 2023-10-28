"use client";

import { NextStudio } from "next-sanity/studio";
import React from "react";
import config from "../../../../sanity.config";

function AdminPage() {
  return <NextStudio config={config} />;
}

export default AdminPage;
