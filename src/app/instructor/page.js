"use client";

import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";

import Box from "@mui/joy/Box";

import Layout from "@/components/instructor/Layout";

export default function Instructor() {
    return (
        <CssVarsProvider disableTransitionOnChange>
            <CssBaseline />
            <Box sx={{ display: "flex", minHeight: "100dvh" }}>
                <Box component="main" className="MainContent" sx={{ flex: 1 }}>
                    <Layout />
                </Box>
            </Box>
        </CssVarsProvider>
    );
}
