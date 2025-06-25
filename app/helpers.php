<?php

function secretEnv(string $key, ?string $default = null): mixed
{
    $value = env($key, $default);

    return $value && file_exists($value)
        ? trim(file_get_contents($value))
        : $value;
}
