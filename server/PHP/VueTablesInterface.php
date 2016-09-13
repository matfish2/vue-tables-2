<?php
/**
 *  VueTables server-side component interface
 */

namespace App\Services\VueTables;

Interface VueTablesInterface {

  public function get($table, Array $fields);

}
