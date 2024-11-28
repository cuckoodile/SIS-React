import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Eye, EyeOff, Lock, User, Mail } from "lucide-react";
import { forwardRef } from 'react';

const MyInput = forwardRef(function MyInput({ id, variant }, ref) {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="relative flex items-center">
            <span className="absolute left-0 top-0 h-full px-3 py-2 text-gray-400">
                {variant === 'password' && <Lock size={20} /> || variant === 'username' && <User size={20} /> || variant === 'email' && <Mail size={20} />}
            </span>
            <Input
                id={id}
                type={variant === 'password' && !showPassword ? 'password' : 'text'}
                className="pl-10"
                ref={ref}
            />
            {variant === 'password' && (
                <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? <Eye /> : <EyeOff />}
                </Button>
            )}
        </div>
    );
})


export default MyInput