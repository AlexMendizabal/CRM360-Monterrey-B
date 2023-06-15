<?php

namespace App\Controller\MTCorp\Logistica\Services;

class DataQuery
{
    private $data = [];
    private $result = [];
    private $arguments = [];

    public function select($arguments = [])
    {
        $data = [];
        $result = [];
        $flatten = $arguments["flatten"] ?? false;
        $groupBy = $this->arguments["groupBy"] ?? null;
        $sum = $this->arguments["sum"] ?? null;
        $count = $this->arguments["count"] ?? null;
        $avg = $this->arguments["avg"] ?? null;

        if(!empty($groupBy)){
            foreach ($this->data as $item) {
                $key = implode("__", array_map(fn($key) => $item[$key], $groupBy));
                $data[$key][] = $item;
            }
        }

        if(empty($data)){
            $data = $this->data;
        }

        if(!empty($sum)){

            $fields = $sum;

            if(empty($groupBy)){
                foreach ($data as $key => $value) {
                    foreach ($fields as $field) {

                        if(!isset($result[$field])){
                            $result[$field] = $value[$field];
                            continue;
                        } 

                        $result[$field] += $value[$field];
                    }
                }
            }else{
                foreach ($data as $key => $value) {
                    foreach ($value as $gKey => $gValue) {
                        foreach ($fields as $field) {

                            if(!isset($result[$key])){
                                $result[$key] = $gValue[$field];
                                continue;
                            } 

                            $result[$key] += $gValue[$field];
                        }
                    }
                }
            }

            if(sizeof($result) === 1 && $flatten === true){
                return array_values($result)[0];
            }

            return $result;
        }

        if(!empty($count)){

            $fields = $count;
            
            if(empty($groupBy)){
                foreach ($data as $key => $value) {
                    foreach ($fields as $field) {

                        if(!isset($result[$field])){
                            $result[$field] = 1;
                            continue;
                        } 

                        $result[$field]++;
                    }
                }
            }else{
                foreach ($data as $key => $value) {
                    foreach ($value as $gKey => $gValue) {
                        foreach ($fields as $field) {

                            if(!isset($result[$key])){
                                $result[$key] = 1;
                                continue;
                            } 

                            $result[$key]++;
                        }
                    }
                }
            }

            if(sizeof($result) === 1 && $flatten === true){
                return array_values($result)[0];
            }

            return $result;
        }

        if(!empty($avg)){

            $fields = $count;
            
            if(empty($groupBy)){
                foreach ($this->result as $key => $value) {
                    foreach ($value as $gKey => $gValue) {
                        foreach ($fields as $field) {
                            if(!$gValue[$field]){
                                continue;
                            }
        
                            if(!isset($result[$key])){
                                $result[$key] = [
                                    "v" => $gValue[$field],
                                    "q" => 1
                                ];
                                continue;
                            } 
        
                            $result[$field]["v"] += $gValue[$field];
                            $result[$field]["q"]++;
                        }
                    }
                }
            }else{
                foreach ($this->result as $key => $value) {
                    foreach ($fields as $field) {
                        if(!$value[$field]){
                            continue;
                        }
    
                        if(!isset($result[$key])){
                            $result[$key] = [
                                "v" => $value[$field],
                                "q" => 1
                            ];
                            continue;
                        } 
    
                        $result[$key]["v"] += $value[$field];
                        $result[$key]["q"]++;
                    }
                }

                return $result;
            }

            foreach ($result as $key => $value) {
                $result[$key] = $result[$key]["v"] / $result[$key]["q"];  
            }
        }

        return $data;
    }

    public function reset()
    {
        $this->result = [];
        $this->data = [];
        $this->arguments = [];
    }

    public function from(array $data)
    {
        $this->reset();
        $this->data = $data;
        return $this;
    }

    public function count(array $fields)
    {
        $this->arguments["count"] = $fields;
        return $this;
    }

    public function sum(array $fields)
    {
        $this->arguments["sum"] = $fields;
        return $this;
    }

    public function avg(array $fields)
    {
        $this->arguments["count"] = $fields;
        return $this;
    }

    public function groupBy(array $fields)
    {
        $this->arguments["groupBy"] = $fields;
        return $this;
    }
}