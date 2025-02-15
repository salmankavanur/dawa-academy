"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function SubAdminPage() {
    const { user, role, loading } = useAuth();
    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        if (loading) return;

        if (!user || role !== "subadmin") {
            router.push("/login");
        } else {
            setAuthorized(true);
        }
    }, [user, role, loading]);

    if (loading || !authorized) {
        return <div className="flex items-center justify-center h-screen">Loading...</div>;
    }

    return (
        <div>
            <h1>Welcome Sub-Admin</h1>
        </div>
    );
}
