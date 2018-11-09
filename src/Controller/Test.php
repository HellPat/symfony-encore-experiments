<?php

declare(strict_types=1);


namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

final class Test extends AbstractController
{
    
    public function test1()
    {
        return $this->render('content/1.html.twig');
    }
    
}