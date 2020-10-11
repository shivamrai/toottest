export default {
    "-keep": "Exclude matching classes, and matching members if specified, from shrinking, optimization, and renaming. Shrinking exclusion on the class means that members will not be removed but does not prevent members from being renamed. Specifying members will prevent them from being renamed if present.", 
    "-dontobfuscate	": "Do not apply renaming, regardless of other configuration.", 
    "-dontoptimize": "Do not optimize the code, regardless of other configuration. This is part of the default configuration.", 
    "-dontshrink": "Do not remove any classes, methods, or fields, regardless of other configuration. (ProGuard docs)", 
    "-keepattributes": "Allows you to specify supported Java™ attributes for R8 to retain in the code.8 does not respect rules regarding Synthetic, Deprecated, or MethodParameters and will remove these attributes regardless of what is configured in -keepattributes.", 
    "-printconfiguration": "Outputs the used configuration rules to the specified file, or to stdout if there is no file specified.", 
    "-printusage": "Outputs a list of the classes, methods, and fields which were removed during shrinking to the specified file, or to stdout if there is no file specified.",
    "-includedescriptorclasses": "Prevent specified field types, method return types, and method parameter types from being renamed. This preserves field and method signatures (post type-erasure, e.g. this does not preserve generic types).",
    "-keepclasseswithmembernames": "Prevent matching classes and matching members from being renamed if the corresponding class contains all of the specified members.",
    "-keeppackagenames": "Don’t rename packages which match the filter.",
    "-overloadaggressively": "Use the same name as much as possible, even if it may not be allowed by the source language.",
}
