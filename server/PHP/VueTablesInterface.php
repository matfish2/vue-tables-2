<?php
/**
 *  VueTables server-side component interface
 */

namespace App\Services\VueTables;

interface VueTablesInterface {

    public function get($table, array $fields);

}
